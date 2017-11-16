function IcebreakerResponse(email){
  this.email = email
}

Icebreaker.BatchCreate = function(emails){
  let returns = []
  emails.forEach(function(emails){
    returns.push( new IcebreakerResponse(email))
  })
  return icebreakers 
}