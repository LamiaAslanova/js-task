let teref1 = parseInt (prompt ("Birinci tərəfi daxil edin:"))
let teref2 = parseInt (prompt ("İkinci tərəfi daxil edin:"))
let teref3 = parseInt (prompt ("Üçüncü tərəfi daxil edin:"))

let ucbucaqdir = teref1+teref2>teref3 && teref2+teref3>teref1 && teref1+teref3>teref2

console.log("Üçbucaqdır:", ucbucaqdir)