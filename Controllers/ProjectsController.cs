using KgoDevBackend.Models;
using KgoDevBackend.Services;
using Microsoft.AspNetCore.Mvc;


namespace KgoDevBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController:ControllerBase
    {
       
        private readonly ProjectsService _projectsService;

        public ProjectsController(ProjectsService booksService) =>
            _projectsService = booksService;

        [HttpGet]
        public async Task<List<Project>> Get() =>
            await _projectsService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Project>> Get(string id)
        {
            var book = await _projectsService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            return book;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Project newBook)
        {
            await _projectsService.CreateAsync(newBook);

            return CreatedAtAction(nameof(Get), new { id = newBook.Id }, newBook);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Project updatedBook)
        {
            var book = await _projectsService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            updatedBook.Id = book.Id;

            await _projectsService.UpdateAsync(id, updatedBook);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var book = await _projectsService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            await _projectsService.RemoveAsync(id);

            return NoContent();
        }
    }
}

