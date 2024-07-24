namespace Trainer.Domain
{
    class User
    {
        public int Id { get; set; }
        public required string Password { get; set; }
        public string? Email { get; set; }

    }
}