"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GameController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query("SELECT * FROM games", function (err, results, fields) {
                if (err) {
                    res.json(err);
                }
                res.json(results);
            });
        });
    }
    listId(req, res) {
        database_1.default.query("SELECT * FROM games WHERE id = ?", [req.params.id], (err, results, fields) => {
            res.json(results);
        });
    }
    create(req, res) {
        //* Create a game
        database_1.default.query("INSERT INTO games SET ?", [req.body]);
        res.json({ msg: "Game Saved!" });
    }
    update(req, res) {
        //! Update Method
        database_1.default.query("UPDATE games set ? WHERE id = ?", [req.body, req.params.id]);
        res.json({ msg: "game updated!" });
    }
    delete(req, res) {
        //! Delete Method
        database_1.default.query("DELETE FROM games WHERE id = ?", [req.params.id]);
        res.json({ msg: "Game deleted" });
    }
}
const gamesController = new GameController();
exports.default = gamesController;
