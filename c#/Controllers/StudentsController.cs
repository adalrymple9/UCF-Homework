using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using mvcnetmongo.Models;

namespace mvcnetmongo.Controllers
{
    public class StudentsController : Controller
    {
        private IMongoCollection<Student> _studentsCollection;

        public StudentsController()
        {
            var mongoClient = new MongoClient();
            _studentsCollection = mongoClient.GetDatabase("mvcnetmongodb")
                .GetCollection<Student>("students");
        }

        public IActionResult Index()
        {
            var students = _studentsCollection
                .Find(FilterDefinition<Student>.Empty)
                .ToList();

            return View(students);
        }

        public IActionResult Edit(Guid id)
        {
            var student = _studentsCollection
                .Find(s => s.Id == id)
                .FirstOrDefault();

            return View(student);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Student student)
        {
            _studentsCollection.InsertOne(student);
            return Redirect("/students");
        }

        [HttpPost, HttpPut]
        public IActionResult Update(Guid id, Student student)
        {
            var filter = new FilterDefinitionBuilder<Student>();
            _studentsCollection.ReplaceOne(filter.Where(s => s.Id == id), student);
            return Redirect("/students");
        }

        [HttpPost, HttpDelete]
        public IActionResult Delete(Guid id)
        {
            var filter = new FilterDefinitionBuilder<Student>();
            _studentsCollection.DeleteOne(filter.Where(s => s.Id == id));
            return Redirect("/students");
        }
    }
}
