import React from 'react'
import PropTypes from 'prop-types'

const AnotherComp= ({name,place,work,company}) => {
    return (
      <>
      <div>
          <table>
              <tr>
                  <th>Name : </th>
                  <td>{name}</td>
              </tr>
             <tr>
                  <th>Place : </th>
                  <td>{place}</td>
              </tr>
              <tr>
                  <th>Work : </th>
                  <td>{work}</td>
              </tr>
              <tr>
                  <th>Company : </th>
                  <td>{company}</td>
              </tr>
          </table>
      </div>
     
      </>
  )
}

AnotherComp.propTypes = {}

export default AnotherComp
