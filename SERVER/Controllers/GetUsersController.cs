using MaxoftUgyfelkapu.Services;
using MaxoftUgyfelkapu.sqlUtils;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace MaxoftUgyfelkapu.Controllers
{
    public class GetUsersController : ApiController
    {
        // GET: GetUsers
        public Dictionary<string, List<List<string>>> Get(
            string nameParam, string idParam, string usernameParam, string birthDateParam, string firmIdParam)
        {
            var response = new Dictionary<string, List<List<string>>>();

            AuthService authService = new AuthService();
            var token = HttpContext.Current.Request.Headers["auth-token"];
            string username = authService.validateToken(token);

            if (username == null) { return response; }

            SqlHelper helper = new SqlHelper("TorzsFelhSelect");
            helper.addParam("@UserName", SqlDbType.VarChar, "levi");
            helper.addParam("@Tsz", SqlDbType.VarChar, idParam == "NOPARAM" ? "" : idParam);
            helper.addParam("@Nev", SqlDbType.VarChar, nameParam == "NOPARAM" ? "" : nameParam);
            helper.addParam("@SzulDatst", SqlDbType.VarChar, birthDateParam == "NOPARAM" ? "" : birthDateParam);
            helper.addParam("@Szerv", SqlDbType.VarChar, firmIdParam == "NOPARAM" ? "" : firmIdParam);
            helper.addParam("@FelhNev", SqlDbType.VarChar, usernameParam == "NOPARAM" ? "" : usernameParam);
            response.Add("users", helper.getData());
            return response;
        }
    }
}