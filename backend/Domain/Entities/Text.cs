namespace Trainer.Domain
{
    class Text
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public string? Content { get; set; }
        public int UserCreatedId { get; set; }
        public User? User { get; set; }
    }
}