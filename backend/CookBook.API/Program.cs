using CookBook.API.Db;
using CookBook.Repository;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<DatabaseConnectionSettings>(
    builder.Configuration.GetSection(nameof(DatabaseConnectionSettings)));

builder.Services.AddSingleton<IMongoDbContext, MongoDbContext>();
builder.Services.AddSingleton(typeof(IBaseRepository<>), typeof(BaseRepository<>));

builder.Services.AddControllers();

var app = builder.Build();

app.MapControllers();

// global cors policy
app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true) // allow any origin
    .AllowCredentials()); // allow credentials

app.Run();
