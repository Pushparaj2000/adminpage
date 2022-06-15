import React from 'react'
import { Card, Table } from 'react-bootstrap'
import './Cabavail.css'



export default function Cabavail() {
  return (
  <div>
    
    <div classname="cabavail">
      <Card className="bg-dark text-white">
        
      <Card.Img src="https://images5.alphacoders.com/958/thumb-1920-958461.jpg" alt="Card image"/>
      <Card.ImgOverlay>
      <center><h3><b>Admin Page</b></h3></center><hr/>
        <Card.Title><Table striped bordered hover variant="dark">Cab Availability</Table></Card.Title>
        <Card.Text>

    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>100</h1>
              <p>Employees</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>50</h1>
              <p>Vehicles</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>10</h1>
              <p>Available Cabs</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>50</h1>
              <p>Drivers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        
        </Card.Text>
        <br/>
        <Card.Text>
        <Table striped bordered hover variant="dark">
      
      <thead>
        <tr>
          <th>#</th>
          
          <th>Driver Name</th>
          <th>Cab seats</th>
          <th>Cab Number</th>
          <th>Driver Number</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          <td>Moorthi</td>
          <td>4 </td>
          <td>6789</td>
          <td>6789546732</td>
          <td>Available</td>
        </tr>
        <tr>
        <td>2</td>
          
          <td>Ramu</td>
          <td>3</td>
          <td>2245</td>
          <td>6789546732</td>
          <td>Not Available</td>
        </tr>
        <tr>
        <td>3</td>
          
          <td>Jegan</td>
          <td>3</td>
          <td>7865</td>
          <td>6789678923</td>
          <td>Not Available</td>
        </tr>
        <tr>
        <td>4</td>
          
          <td>Ram</td>
          <td>4</td>
          <td>6767</td>
          <td>6789545566</td>
          <td>Not Available</td>
        </tr>
        <tr>
        <td>5</td>
          
          <td>Suresh</td>
          <td>6</td>
          <td>2234</td>
          <td>7543446732</td>
          <td>Available</td>
        </tr>
        <tr>
        <td>6</td>
          
          <td>Ramesh</td>
          <td>6</td>
          <td>1144</td>
          <td>9845646732</td>
          <td>Available</td>
        </tr>
        <tr>
        <td>7</td>
          
          <td>Suman</td>
          <td>4</td>
          <td>1324</td>
          <td>6489546783</td>
          <td>Not Available</td>
        </tr>
        <tr>
        <td>8</td>
          
          <td>Prakash</td>
          <td>4</td>
          <td>2278</td>
          <td>6489546789</td>
          <td>Available</td>
        </tr>
        <tr>
        <td>9</td>
          
          <td>Jeeva</td>
          <td>4</td>
          <td>8976</td>
          <td>6489589765</td>
          <td>Available</td>
        </tr>

        
        
      </tbody>
    </Table>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
      
</div></div>
  )
}
