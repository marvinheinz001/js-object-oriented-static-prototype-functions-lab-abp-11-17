function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  // let icebreakers = []
  // emails.forEach(function(email){
  //   icebreakers.push( new IcebreakerResponse(email))
  // })
  return emails.map(function(email){
    return new IcebreakerResponse(email)
  })
}
