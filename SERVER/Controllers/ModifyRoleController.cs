using MaxoftUgyfelkapu.Services;
using MaxoftUgyfelkapu.sqlUtils;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

public class NewRoleJson
{
    public string username { get; set; }
    public string role { get; set; }
    public string status { get; set; }
}

namespace MaxoftUgyfelkapu.Controllers
{
    public class ModifyRoleController : ApiController
    {

        // POST: api/ModifyRole
        public Dictionary<string, Object> Post(NewRoleJson newRole)
        {
            var response = new Dictionary<string, Object>();

            AuthService authService = new AuthService();
            var token = HttpContext.Current.Request.Headers["auth-token"];
            string username = authService.validateToken(token);

            //if (username == null) { return response; }

            SqlHelper helper = new SqlHelper("UgyfelSelectByUserName");
            helper.addParam("@UserName", SqlDbType.VarChar, username);
            helper.addParam("@FelhNev", SqlDbType.VarChar, newRole.username);
            helper.addParam("@ReleName", SqlDbType.VarChar, newRole.role);
            helper.addParam("@Jel", SqlDbType.Bit, newRole.status);
            bool isSuccessful = helper.updateRow();
            response.Add("isSuccessful", isSuccessful);
            return response;
        }

    }
}
