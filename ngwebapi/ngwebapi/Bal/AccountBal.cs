using ngwebapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngwebapi.Bal
{
    public class AccountBal
    {



        public bool register (Registration item)
        {
            return new Dal.RegistrationDal().Register(item);
        }

        public bool validEmail(string Email)
        {
            return new Dal.RegistrationDal().validEmaiid(Email);
        }

        public IEnumerable<Registration> getemplist()
        {
            return new Dal.RegistrationDal().getemplist();
        }

        public bool getlogindetails(string username, string password)
        {
            return new Dal.RegistrationDal().getlogindetails(username, password);
        }

        public int updateEmp(Registration registration)
        {
            return new Dal.RegistrationDal().updateEmp(registration);
        }
    }
}