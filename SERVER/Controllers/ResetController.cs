using MaxoftUgyfelkapu.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

public class ResetJson
{
    public string username { get; set; }
}

namespace MaxoftUgyfelkapu.Controllers
{
    // TODOs
    // Save new password
    // Get email address to send from
    public class ResetController : ApiController
    {
        // POST: reset
        public Dictionary<string, Boolean> Post(ResetJson reset)
        {
            var response = new Dictionary<string, Boolean>();

            ResetService resetService = new ResetService();
            //var user = resetService.getUser(reset.username);
            var user = reset.username;
            if (user == null) { response.Add("isSuccessful", false); } else
            {
                //string password = resetService.generateNewPassword(user[0]);
                //resetService.informUser(user[10], password);
                string password = resetService.generateNewPassword(user);
                resetService.informUser(user, password);
                response.Add("isSuccessful", true);
            }
            return response;
        }
    }
}