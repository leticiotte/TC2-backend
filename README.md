# Back-end

API realizada para a matéria de TC2, utilizando NodeJS, Express e MongoDB

# Rotas

[GET] /person <br>
Retorna todas as pessoas cadastradas

[POST] /person
Adiciona uma pessoa no sistema
Body example:
```
{
    "name": "User teste",
    "nacionality": "italian",
    "age": 25,
    "profession": "architecture"
}
```

[GET] /person/{id}
Recupera uma pessoa pelo id dela

[DELETE] /person/{id}
Deleta uma pessoa pelo id dela

[PATCH] /person/{id}
Edita dados de uma pessoa, baseado no id
Body example:
```
{
    "name": "User teste",
    "nacionality": "italian",
    "age": 25,
    "profession": "architecture"
}
```
