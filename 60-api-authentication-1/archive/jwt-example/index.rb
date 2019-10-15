require 'jwt'

payload = { message: 'Sup' }

token = 'eyJhbGciOiJIUzI1NiJ9.eyJtZXNzYWdlIjoiU3VwIn0.7YbD0WfvZzXNCp_O25pI6mTauYKrMTTR81qekgV1L
Ks'

result = JWT.decode(token, 'lasjf;aiosjfpaw38ru2938reoifnasfklne9')[0]

puts result