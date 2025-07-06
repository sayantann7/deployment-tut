import express from 'express';
import { prisma } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// @ts-ignore
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    const user = await prisma.user.create({
        data: {
            username,
            password,
        },
    });
    return res.status(201).json(user);
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});