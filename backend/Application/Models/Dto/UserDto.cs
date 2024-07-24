namespace Trainer.Application
{
    public class UserDTO
    {
        public required string Id { get; set; }
        public string? Username { get; set; }
        public string? AccessToken { get; set; }
    }
}