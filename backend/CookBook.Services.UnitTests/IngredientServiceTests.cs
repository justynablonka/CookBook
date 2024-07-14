using CookBook.Models;
using CookBook.Repository;
using Moq;
using System.Linq;

namespace CookBook.Services.UnitTests {
    public class IngredientServiceTests {

        private IngredientService _service;
        private Mock<IBaseRepository<Recipe>> _repository;

        [SetUp]
        public void Setup() {
            _repository = new Mock<IBaseRepository<Recipe>>();
            _service = new IngredientService(_repository.Object);
        }

        [Test]
        public async Task GetAllIngredients_Should_GroupIngredients() {
            //arrange
            var initialData = GetData();
            _repository.Setup(x => x.Get()).ReturnsAsync(initialData);

            //act
            var result = await _service.GetAllIngredients();

            //assert
            _repository.Verify(x => x.Get(), Times.Once);
            Assert.That(result.Keys.Count, Is.EqualTo(3));
            Assert.That(result["pomidor"].Count, Is.EqualTo(2));
            Assert.That(result["arbuz"].Count, Is.EqualTo(1));
            Assert.That(result["cebula"].Count, Is.EqualTo(1));
        }

        private List<Recipe> GetData() {
            return new List<Recipe> {
                new Recipe {
                    Ingredients = [
                        new Ingredient {
                            Name = "pomidor",
                        },
                        new Ingredient {
                            Name = "arbuz",
                        }
                    ]
                },
                new Recipe {
                    Ingredients = [
                        new Ingredient {
                            Name = "pomidor",
                        },
                        new Ingredient {
                            Name = "cebula",
                        }
                    ]
                }
            };
        }
    }
}