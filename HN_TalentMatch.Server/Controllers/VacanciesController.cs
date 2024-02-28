using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using HN_TalentMatch.Server;
using HN_TalentMatch.Server.Data;

namespace HN_TalentMatch.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VacanciesController : Controller
    {
        private readonly HN_TalentMatchServerContext _context;

        public VacanciesController(HN_TalentMatchServerContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public async Task<IList<Vacancy>> GetAll()
        {   
            return await _context.Vacancy.ToListAsync();
        }

        [HttpGet("GetById")]
        public async Task<Vacancy?> GetById(int id)
        {
            return await _context.Vacancy.FirstOrDefaultAsync(v=>v.Id==id);
        }

        //// GET: Vacancies/Details/5
        //public async Task<IActionResult> Details(int? id)
        //{
        //    if (id == null || _context.Vacancy == null)
        //    {
        //        return NotFound();
        //    }

        //    var vacancy = await _context.Vacancy
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (vacancy == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(vacancy);
        //}

        //// GET: Vacancies/Create
        //public IActionResult Create()
        //{
        //    return View();
        //}

        //// POST: Vacancies/Create
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create([Bind("Id,uuid,name,keywords,description,comment")] Vacancy vacancy)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _context.Add(vacancy);
        //        await _context.SaveChangesAsync();
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(vacancy);
        //}

        //// GET: Vacancies/Edit/5
        //public async Task<IActionResult> Edit(int? id)
        //{
        //    if (id == null || _context.Vacancy == null)
        //    {
        //        return NotFound();
        //    }

        //    var vacancy = await _context.Vacancy.FindAsync(id);
        //    if (vacancy == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(vacancy);
        //}

        //// POST: Vacancies/Edit/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(int id, [Bind("Id,uuid,name,keywords,description,comment")] Vacancy vacancy)
        //{
        //    if (id != vacancy.Id)
        //    {
        //        return NotFound();
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _context.Update(vacancy);
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!VacancyExists(vacancy.Id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(vacancy);
        //}

        //// GET: Vacancies/Delete/5
        //public async Task<IActionResult> Delete(int? id)
        //{
        //    if (id == null || _context.Vacancy == null)
        //    {
        //        return NotFound();
        //    }

        //    var vacancy = await _context.Vacancy
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (vacancy == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(vacancy);
        //}

        //// POST: Vacancies/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(int id)
        //{
        //    if (_context.Vacancy == null)
        //    {
        //        return Problem("Entity set 'HN_TalentMatchServerContext.Vacancy'  is null.");
        //    }
        //    var vacancy = await _context.Vacancy.FindAsync(id);
        //    if (vacancy != null)
        //    {
        //        _context.Vacancy.Remove(vacancy);
        //    }

        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}

        //private bool VacancyExists(int id)
        //{
        //  return (_context.Vacancy?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
