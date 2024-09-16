# Table of Contents
1. [Input](#input)   
    - [Enter your full Name](#enter-your-full-name)
    - [Append a text and press keyboard tab](#append-a-text-and-press-keyboard-tab)
    - [What is inside the text box](#what-is-inside-the-text-box)
    - [Clear the text](#clear-the-text)
    - [Confirm edit field is disabled](#confirm-edit-field-is-disabled)
    - [Confirm text is readonly](#confirm-text-is-readonly)

2. []


# Input
Todos os testes são realizados na página "Input"

[Clique aqui](https://letcode.in/edit) para abrir a página

## Enter your full Name
![](/doc-assets/input/input-enter-full-name.png)

### O que precisa ser feito?
É necessário apenas inserir um nome no campo `Enter your full Name`, e validar se o texto inserido no campo é igual ao texto atual do campo   

## Append a text and press keyboard tab
![](/doc-assets/input/append-text.png)

### O que precisa ser feito?
É necessário manter o mesmo texto atual do campo(I am good), e apenas adicionar um novo texto ao final do campo, realizar uma concatenação no campo.

Exemplo 1:

![](/doc-assets/input/append-text2.png)

Exemplo 2:

![](/doc-assets/input/append-text3.png)


## What is inside the text box
![](/doc-assets/input/what-is-inside.png)

### O que precisa ser feito?
É necessário apenas validar se o texto do campo é igual a  `ortonikc`


## Clear the text
![](/doc-assets/input/clear-text.png)

### O que precisa ser feito?
É necessário apenas limpar o texto do campo e verificar se o campo ficou vazio após o `clear` 

## Confirm edit field is disabled
![](/doc-assets/input/confirm-disabled.png)

### O que precisa ser feito?
É necessário apenas verificar se o campo está desabilitado 

## Confirm text is readonly
![](/doc-assets/input/confirm-read-only.png)

### O que precisa ser feito?
É necessário apenas verificar se o campo está configurado como apenas leitura

## Documentações úteis

### Ações do Playwright
O Playwright possui uma documentação que aborda como realizar ações com a ferramenta. Essas ações podem ser cliques, preencher campos, pressionar teclas do teclado, etc...   
Clique no link abaixo para acessar a documentação.   
- [Actions](https://playwright.dev/docs/input#text-input)

## Extrair texto de elementos do tipo `input`, `textarea`, `select`   
- [inputValue](https://playwright.dev/docs/api/class-elementhandle#element-handle-input-value)

## Asserções
O Playwright fornece uma série de "métodos" que podem ser utilizados para realizar validações(asserções).   
A documentação completa a respeito das asserções suportadas pode ser verificada abaixo.   
- [Assertions](https://playwright.dev/docs/test-assertions)