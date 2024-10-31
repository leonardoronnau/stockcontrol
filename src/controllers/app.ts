import { Router } from "express";
const router = Router()

let produtos = []


// criação de novo produto
router.post('/produtos', (req,res)=> {
const {nome , preco} = req.body;
const id = produtos.length +1;
const novoproduto = {nome, preco, id}
produtos.push(novoproduto)
res.status(201).json(novoproduto)

})


//consulta de produtos

router.get('/produtos', (req,res)=> {
    res.json(produtos)

})


//atualizar o produto 

router.put('/produtos/:id', (req, res)=> {
    const {id} = req.params;
    const {nome, preco} = req.body;
    const produto = produtos.find(p => p.id == id)

if(produto) {
    produto.nome = nome || produto.nome;
    produto.preco = preco || produto.preco;
    res.json(produto)
}else {
    res.status(404).json({mensagem:'PRODUTO NÃO LOCALIZADO NO SISTEMA'})
}

})

// deletar produtos 

router.delete('/produtos/:id', (req, res)=> {
    const {id} = req.params;
    const indice = produtos.findIndex(p => p.id == id)

    if(indice !== -1){
        produtos.splice(indice, 1)
        res.json({mensagem : 'Produto deletado'})
    }else {
        res.status(404).json({mensagem: 'Produto não localizado'})
    }
})



export default router;