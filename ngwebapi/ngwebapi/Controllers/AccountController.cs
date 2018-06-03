using ngwebapi.Bal;
using ngwebapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ngwebapi.Controllers
{
    [RoutePrefix("api/Account")]


    public class AccountController : ApiController
    {
        private readonly logindbEntities db = new logindbEntities();
        private readonly AccountBal _account;

        public AccountController()
        {
            this._account = new AccountBal();
        }

        [HttpPost]
        [Route("Register/")]

        public bool register(Registration item)
        {
            bool result = false;
            if (ModelState.IsValid)
            {
                result = _account.register(item);
            }
            return result;
        }

        [HttpGet]
        [Route("validateEmail")]
        public bool email(string email)
        {
            bool result = false;
            if (ModelState.IsValid)
            {
                result = _account.validEmail(email);
            }
            return result;

        }

        [HttpGet]
        [Route("GetEmployee")]

        public IEnumerable<Registration> GetEmployees()
        {
            return _account.getemplist();
        }


        [HttpGet]
        [Route("login")]

        public bool Login(string username , string password)
        {
         
            
                bool  result = _account.getlogindetails(username, password);

            return result;
          

        }

        [HttpPut]
        [Route("Edit")]

        public int editemplist(int Id, [FromBody] Registration registration)
        {
            return _account.updateEmp(registration);
        }


    }

}
