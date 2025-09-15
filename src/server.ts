import app from "./app";
import { Server } from "http";

const PORT: number = parseInt(process.env.PORT || '3000');

const server: Server = app.listen(PORT, '0.0.0.0', 0, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { server };