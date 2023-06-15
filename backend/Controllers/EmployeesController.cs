using EmployeeCRUDAPI.Data;
using EmployeeCRUDAPI.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Reflection;

namespace EmployeeCRUDAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly DBContext _context;
        public EmployeesController(DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var emp = await _context.Employees.OrderBy(x => x.id).ToListAsync();

            if (emp == null || emp?.Count == 0)
            {
                return NotFound("No record found!");
            }

            return Ok(emp);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var emp = await _context.Employees.FindAsync(id);

            if (emp == null)
            {
                return NotFound("No record found!");
            }

            return Ok(emp);
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> AddEmployee([FromBody] Employee emp)
        {
            if (emp == null)
            {
                return BadRequest("Invalid employee data");
            }
            else
            {
                await _context.Employees.AddAsync(emp);
                await _context.SaveChangesAsync();
                return Ok(emp);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Employee>> EditEmployee([FromBody] Employee employee, int id)
        {
            if (employee == null || id != employee.id)
            {
                return BadRequest("Invalid employee data or ID mismatch.");
            }

            var existingEmployee = await _context.Employees.FindAsync(id);
            if (existingEmployee == null)
            {
                return NotFound("Employee not found.");
            }

            existingEmployee.name = employee.name;
            existingEmployee.email = employee.email;
            existingEmployee.contact = employee.contact;
            existingEmployee.gender = employee.gender;
            existingEmployee.skills = employee.skills;

            _context.Employees.Update(existingEmployee);
            await _context.SaveChangesAsync();

            return Ok(existingEmployee);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound("Employee not found.");
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return Ok(new { result = "Deleted" });
        }
    }
}