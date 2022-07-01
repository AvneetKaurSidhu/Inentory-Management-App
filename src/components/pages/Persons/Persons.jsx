import fetchUrls from '../../../config/config.json';
import PersonTable from '../../organisms/PersonTable/PersonsTable'
import useFetch from '../../../config/useFetch';
import Sidebar from '../../molecules/SideBar-Persons/Sidebar-Persons';
import Dropdown from '../../molecules/Dropdown/Dropdown';
import './Persons.scss';



const Persons = () => {
  const email = localStorage.getItem("email");
  const skype = localStorage.getItem("personname");
  const products = useFetch(fetchUrls.personsApi, "GET");

  let productList = null;

  if (products.apiData !== null) {
    productList = products.apiData.map((product) => {
      return (<PersonTable product={product} key={product.id} id={product.id}
      ></PersonTable>)
    });
  }

  return (
    <div className='personsTable'>
      <Dropdown />
      <div className="sidebarDetails">
        <Sidebar />

      </div>
      <div className="tableContainer">
        <div>
          <div class="personName">{skype}</div>
          <p className="personsInfo">
            Email:<span className="personsDetails">{email}</span>
          </p>
          <p className="personsInfo">
            Skype:<span className="personsDetails"> {skype}</span>
          </p>
        </div>
        <table className="table mt-5 ">
          <thead className="thead-dark">
            <tr>
              <th className="tableHeader">Type</th>
              <th className="tableHeader">Serial</th>
              <th className="tableHeader">Name</th>
              <th className="tableHeader">From</th>
            </tr>
          </thead>
          <tbody>

            {productList ?
              productList
              :
              <tr>

              </tr>
            }
          </tbody>
        </table>


      </div>
    </div>

  )
}

export default Persons;
