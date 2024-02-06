const calculateMeanScores = (students) => {
    const meanScores = {};

    // Get all subject keys dynamically (excluding non-subject fields)
    const subjectKeys = Object.keys(students[0]).filter(
        (key) => key !== 'name' && key !== 'total' && key !== 'position'
    );

    // Iterate through subjects
    subjectKeys.forEach((subject) => {
        const subjectScores = students.map((student) => student[subject].score);

        // Filter out non-numeric scores
        const numericScores = subjectScores.filter((score) => typeof score === 'number');

        // Check if there are valid numeric scores
        if (numericScores.length > 0) {
            const totalScore = numericScores.reduce((acc, score) => acc + score, 0);
            meanScores[subject] = totalScore / numericScores.length;
        } else {
            meanScores[subject] = 0; // Set default value if no valid numeric scores
        }
    });

    return meanScores;
};

const calculateTotalMean = (studentsWithTotals) => {
    const totalScores = studentsWithTotals.map((student) => student.total);

    // Filter out non-numeric scores
    const numericScores = totalScores.filter((score) => typeof score === 'number');

    // Check if there are valid numeric scores
    if (numericScores.length > 0) {
        return numericScores.reduce((acc, score) => acc + score, 0) / numericScores.length;
    } else {
        return 0; // Set default value if no valid numeric scores
    }
};

const calculateStudentTotal = (student) => {
    const subjectScores = Object.values(student).filter((score) => typeof score === 'object' && 'score' in score);
    return subjectScores.reduce((acc, scoreObj) => acc + scoreObj.score, 0);
};

const rankStudents = (students) => {
    const sortedStudents = [...students].sort((a, b) => calculateStudentTotal(b) - calculateStudentTotal(a));
    sortedStudents.forEach((student, index) => {
        student.position = index + 1;
    });
    return sortedStudents;
};

const newExam = async (exam, req, res) => {
    try {
        const { name, date, grade, class_teacher, students } = req.body;

        // Rank students based on total marks
        const rankedStudents = rankStudents(students);

        // Calculate and add total field for each student
        const studentsWithTotals = rankedStudents.map((student) => ({
            ...student,
            total: calculateStudentTotal(student),
        }));

        // Calculate mean scores
        const meanScores = calculateMeanScores(studentsWithTotals);

        // Calculate total mean score using the correct students array
        const totalMean = calculateTotalMean(studentsWithTotals);

        // Add total to mean scores
        meanScores.total = totalMean;

        // Add mean scores and rankings to each student
        const studentsWithExtras = studentsWithTotals.map((student) => ({
            ...student,
            mean_scores: meanScores,
        }));

        // Create exam record
        const newExamInstance = new exam({
            exam_name: name,
            exam_date: date,
            grade,
            class_teacher,
            students: studentsWithExtras,
            mean_scores: meanScores, // Add mean_scores to the exam object
        });

        // Save exam record to the database
        const savedExam = await newExamInstance.save();

        return res.status(201).json({
            success: true,
            message: 'Exam created successfully',
            exam: savedExam,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};




module.exports = { newExam };
