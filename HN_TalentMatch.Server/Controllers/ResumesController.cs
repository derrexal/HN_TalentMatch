﻿using HN_TalentMatch.Server.Data;
using Microsoft.AspNetCore.Mvc;

namespace HN_TalentMatch.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResumesController : Controller
    {
        private readonly HN_TalentMatchServerContext _context;
        private readonly ILogger<ResumesController> _logger;

        public ResumesController(ILogger<ResumesController> logger, HN_TalentMatchServerContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("GetAll")]
        public IEnumerable<Resume> Get()
        {
            return _context.Resume.ToArray();
        }
    }
}
