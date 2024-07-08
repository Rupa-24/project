<html lang="eng">
<head>
    <meta     {<!DOCTYPE html>
charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./sample2.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
  <div class="d-flex justify-content-center">
    <form class="shadow-lg p-3 mb-5 bg-body rounded">
      <div class="row mb-3">
        <label for="fn" class="col-sm-3 col-form-label">First name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="fn">
        </div>
      </div>
      <div class="row mb-3">
        <label for="ln" class="col-sm-3 col-form-label">Last name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="ln">
        </div>
      </div>
      <div class="row mb-3">
        <label for="mn" class="col-sm-3 col-form-label">Moblie Number</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="mn">
        </div>
      </div>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <div>
            <input type="text" class="form-control" id="inputCity">
          </div>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>--select--</option>
            <option value="AP">AP</option>
            <option value="MP">MP</option>
            <option value="TN">TN</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Zip</label>
          <input type="text" class="form-control" id="inputZip">
        </div>
      </div>
      <br>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3">
        </div>
      </div>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
        <div class="col-sm-10">
          <div class="male">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1">
            <label class="form-check-label" for="gridRadios1">Male</label>
          </div>
          <div class="female">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">Female</label>
          </div>
        </div>
      </fieldset>
      <div class="row mb-3">
        <label for="branch" class="col-sm-2 col-form-label">Branch</label>
        <div class="col-sm-10">
          <select class="form-select" aria-label="Default select example">
            <option selected>--select--</option>
            <option value="CSE">CSE</option>
            <option value="MECH">MECH</option>
            <option value="EEE">EEE</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <label for="clg" class="col-sm-2 col-form-label">College</label>
        <div class="col-sm-10">
          <select class="form-select" aria-label="Default select example">
            <option selected>--select--</option>
            <option value="AITS-KADAPA">AITS-KADAPA</option>
            <option value="AITS-RAJAMPET">AITS-RAJAMPET</option>
            <option value="KSRM-KADAPA">KSRM-KADAPA</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" onclick="sub()">Submit</button>
    </form>
  </div>
  <script>
    async function sub()

      alert("successfully submitted");
    }
  </script>
</body>
</html>