using ngwebapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngwebapi.Dal
{
    public class RegistrationDal
    {
        private readonly logindbEntities db = new logindbEntities();

        public bool Register(Registration item)
        {
            try
            {
                if (item != null)
                {

                    var insteruser = db.Sp_InsertRegistration(item.UserName , item.Password,item.EmailId);

                    //Registration obj = new Registration();

                    //obj.UserName = item.UserName;
                    //obj.Password = item.Password;
                    //obj.EmailId = item.EmailId;

                    //db.Registrations.Add(obj);
                    //db.SaveChanges();

                    return true;
                }
                else
                {
                    return false;
                }

            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool validEmaiid(string email)
        {
            try
            {
                if (email != null)
                {

                    var resukt = db.sp_validEmailId(email).ToList();

                    if (resukt.Count==0)
                    {
                        return true;

                    }
                    //Registration obj = new Registration();

                    //obj.UserName = item.UserName;
                    //obj.Password = item.Password;
                    //obj.EmailId = item.EmailId;

                    //db.Registrations.Add(obj);
                    //db.SaveChanges();

                    return false;
                }
                else
                {
                    return false;
                }

            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool getlogindetails(string username, string password)
        {
            try
            {
                var isvalid = db.Registrations.FirstOrDefault(x => x.UserName == username && x.Password == password);
                //db.Registrations

                if (isvalid!=null)
                {
                    return true;
                }

                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<Registration> getemplist() {

            try
            {
                return db.Registrations;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int updateEmp(Registration registration)
        {
            try
            {
                if (registration!=null)
                {
                    db.Entry(registration).State = System.Data.Entity.EntityState.Modified;
                    return 1;
                }
            }
            catch (Exception)
            {

                throw;
            }
            return 0;
           
        }

    }
}