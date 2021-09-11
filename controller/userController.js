const express = require('express');
const models = require("../models");

exports.getAllUser = async (req, res) => {
    try {
        const User = await models.User.findAll({
            
        });
    res.status(200).send({
        status: 200,
        message: "Berhasil  get data user",
        data: User,
    })
    } catch (error) {
        
    }
}

exports.createUser = async (req, res) => {
    try {
        const {firstName, lastName, email, phone_number} = req.body;
        const User = await models.User.create({
            firstName,
            lastName,
            email,
            phone_number
        });

        res.status(200).send({
            status:200, 
            message: "User berhasil ditambahkan", 
            data: User,
        });
    }catch (error){
        res.status(500).send({
            status:500, 
            message: error.message
        });
    }
};

exports.updateUser = async(req, res) => {
    try {
        const id = req.params.id;
        const {firstName, lastName, email, phone_number} = req.body;
        const User = await models.User.update({
            firstName,
            lastName,
            email,
            phone_number
        },
            {
                where: {
                    id: id,
                }
            }
        )
        res. status(200).send({
            status:200,
            message: "Berhasil di update",
            data:User
        })
    } catch (error) {
        res.status(500).send({
            status:500, 
            message: error.message
        });
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        await models.User.destroy({
            where: {
                id:id,
            }
        })
        res. status(200).send({
            status:200,
            message: "Berhasil di delete",
            data:User
        });
    } catch (error) {
        res.status(500).send({
            status:500, 
            message: error.message
        });
    }
}