namespace Trainer.Application
{
    interface IAuthService
    {
        Task RegisterAsync(UserRequest user, CancellationToken token);
        Task<string> LoginAsync(UserRequest user, CancellationToken token);
        Task<UserDTO> SelfAsync(HttpContext httpContext, CancellationToken token);
    }

    class AuthService : IAuthService
    {
        public Task<string> LoginAsync(UserRequest user, CancellationToken token)
        {
            throw new NotImplementedException();
        }

        public Task RegisterAsync(UserRequest user, CancellationToken token)
        {
            throw new NotImplementedException();
        }

        public Task<UserDTO> SelfAsync(HttpContext httpContext, CancellationToken token)
        {
            throw new NotImplementedException();
        }
    }
}