namespace Trainer.Domain
{
    class Result
    {
        public int Id { get; set; }
        public double Score { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } = null!;
    }
}