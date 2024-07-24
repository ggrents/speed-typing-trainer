using Microsoft.EntityFrameworkCore;
using Trainer.Domain;

class AppContext : DbContext
{
    private readonly string? _connectionString;
    public DbSet<User> Users { get; set; }
    public DbSet<Result> Results { get; set; }
    public DbSet<Text> Texts { get; set; }

    public AppContext(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("PostgreConnection");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_connectionString);
    }


}