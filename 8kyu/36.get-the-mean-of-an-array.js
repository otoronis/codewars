const getAverage = marks => Math.floor(marks.reduce((sum, x) => sum + x, 0) / marks.length)