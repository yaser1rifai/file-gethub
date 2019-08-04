function a() {
   console.log("Error from a!")
  }

  function b() {
    try {
      a();
    } catch (error) {
      throw(error)
    }
  }
  b();