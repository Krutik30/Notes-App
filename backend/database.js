mongoose.connect('mongodb+srv://agherakrutik99:Krutik30@cluster0.raa0ml1.mongodb.net/notes')

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('DB YES YES');
})

connection.on('error', (error) => {
    console.log('mongo error: ' + error);
})
