using Microsoft.AspNetCore.Mvc;

namespace Trainer.Application
{
    public static class UserEndpoints
    {
        public static void MapUserEndpoints(this IEndpointRouteBuilder builder)
        {
            var group = builder.MapGroup("/api/account").WithTags("Account");

            group.MapPost("register", Register);
            group.MapPost("login", Login);
            group.MapGet("self", Self);
        }

        public async static Task<IResult> Register([FromBody] UserRequest user, [FromServices] IAuthService authService, CancellationToken cancellationToken)
        {
            try
            {
                await authService.RegisterAsync(user, cancellationToken);
                return Results.Ok("User was registered successfully");
            }
            catch (Exception ex)
            {
                return Results.BadRequest(ex.Message);
            }
        }

        public async static Task<IResult> Login([FromBody] UserRequest credentials,
            [FromServices] IAuthService authService, CancellationToken cancellationToken)
        {
            try
            {
                return Results.Ok(await authService.LoginAsync(credentials, cancellationToken));
            }
            catch (Exception ex)
            {
                return Results.BadRequest(ex.Message);
            }
        }

        public async static Task<IResult> Self(HttpContext context, [FromServices] IAuthService authService, CancellationToken cancellationToken)
        {
            try
            {
                return Results.Ok(await authService.SelfAsync(context, cancellationToken));
            }
            catch (Exception ex)
            {
                return Results.BadRequest(ex.Message);
            }
        }

    }
}