function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email){
  let returns = []
  emails.forEach(function(email){
    returns.push( new IcebreakerResponse(email))
  })
  return icebreakers
}
