# Back-end

API realizada para a matéria de TC2, utilizando NodeJS, Express e MongoDB

# Rotas

[GET] /person <br>
Retorna todas as pessoas cadastradas<br><br>

[POST] /person <br>
Adiciona uma pessoa no sistema<br>
Body example:
```
{
    "name": "User teste",
    "nacionality": "italian",
    "age": 25,
    "profession": "architecture"
}
```
<br>

[GET] /person/{id}<br>
Recupera uma pessoa pelo id dela<br>

[DELETE] /person/{id}<br>
Deleta uma pessoa pelo id dela<br>

[PATCH] /person/{id}<br>
Edita dados de uma pessoa, baseado no id<br>
Body example:
```
{
    "name": "User teste",
    "nacionality": "italian",
    "age": 25,
    "profession": "architecture"
}
```
