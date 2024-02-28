using System.Collections;
using Microsoft.EntityFrameworkCore;
using HN_TalentMatch.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace HN_TalentMatch.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResumesController : Controller
    {
        private readonly HN_TalentMatchServerContext _context;

        public ResumesController(HN_TalentMatchServerContext context)
        {
            _context = context;
        }

        // GET: Resumes
        [HttpGet("Get")]
        public async Task<IList<Resume>> Index()
        {
            return await _context.Resume.ToListAsync();
        }

        //// GET: Resumes/Details/5
        //public async Task<IActionResult> Details(int? id)
        //{
        //    if (id == null || _context.Resume == null)
        //    {
        //        return NotFound();
        //    }

        //    var resume = await _context.Resume
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (resume == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(resume);
        //}

        //// GET: Resumes/Create
        //public IActionResult Create()
        //{
        //    return View();
        //}

        //// POST: Resumes/Create
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create([Bind("Id,uuid,first_name,last_name,birth_date,country,city,about,key_skills,languageItems")] Resume resume)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _context.Add(resume);
        //        await _context.SaveChangesAsync();
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(resume);
        //}

        //// GET: Resumes/Edit/5
        //public async Task<IActionResult> Edit(int? id)
        //{
        //    if (id == null || _context.Resume == null)
        //    {
        //        return NotFound();
        //    }

        //    var resume = await _context.Resume.FindAsync(id);
        //    if (resume == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(resume);
        //}

        //// POST: Resumes/Edit/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(int id, [Bind("Id,uuid,first_name,last_name,birth_date,country,city,about,key_skills,languageItems")] Resume resume)
        //{
        //    if (id != resume.Id)
        //    {
        //        return NotFound();
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _context.Update(resume);
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!ResumeExists(resume.Id))
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
        //    return View(resume);
        //}

        //// GET: Resumes/Delete/5
        //public async Task<IActionResult> Delete(int? id)
        //{
        //    if (id == null || _context.Resume == null)
        //    {
        //        return NotFound();
        //    }

        //    var resume = await _context.Resume
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (resume == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(resume);
        //}

        //// POST: Resumes/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(int id)
        //{
        //    if (_context.Resume == null)
        //    {
        //        return Problem("Entity set 'HN_TalentMatchServerContext.Resume'  is null.");
        //    }
        //    var resume = await _context.Resume.FindAsync(id);
        //    if (resume != null)
        //    {
        //        _context.Resume.Remove(resume);
        //    }

        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}

        //private bool ResumeExists(int id)
        //{
        //  return (_context.Resume?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
