using CookBook.API.Db;
using CookBook.Repository;
using CookBook.Services;
using System.IO.Abstractions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<DatabaseConnectionSettings>(
    builder.Configuration.GetSection(nameof(DatabaseConnectionSettings)));

builder.Services.AddSingleton<IMongoDbContext, MongoDbContext>();
builder.Services.AddSingleton(typeof(IBaseRepository<>), typeof(BaseRepository<>));
builder.Services.AddSingleton<IIngredientService, IngredientService>();
builder.Services.AddSingleton<IFileSystem, FileSystem>();
builder.Services.AddSingleton<IRecipeService, RecipeService>();
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
