import React from 'react'

const MovieListScreen = () => {
return (
<div>
    <h1>Movie List Screen</h1>
  <table class="table table-hover">
      <thead>
          <tr>
              <th scope="col">Serial</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Duration</th>
              <th scope="col">Size</th>
              <th scope="col">Quality</th>
              <th scope="col">Released</th>
          </tr>
      </thead>
      <tbody>
          <tr class="table-active">
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr class="table-primary">
              <th scope="row">Primary</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr class="table-secondary">
              <th scope="row">Secondary</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr class="table-success">
              <th scope="row">Success</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr class="table-danger">
              <th scope="row">Danger</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr class="table-warning">
              <th scope="row">Warning</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr class="table-info">
              <th scope="row">Info</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr class="table-light">
              <th scope="row">Light</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
          <tr class="table-dark">
              <th scope="row">Dark</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
          </tr>
      </tbody>
  </table>
</div>
)
}

export default MovieListScreen