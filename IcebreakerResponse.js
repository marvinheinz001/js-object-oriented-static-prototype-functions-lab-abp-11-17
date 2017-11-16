function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  let icebreakers = []
  emails.forEach(function(email){
    returns.push( new IcebreakerResponse(email))
  })
  return icebreakers
}
