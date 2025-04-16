export class CreateTodoDto {
    title: string; // Title of the todo item
    description: string; // Description of the todo item
    completed: boolean; // Completion status of the todo item
    userId: number; // ID of the user associated with the todo item
}
