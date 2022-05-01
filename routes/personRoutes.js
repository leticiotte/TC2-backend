const router = require("express").Router();
const Person = require("../models/Person");

router.post("/", async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: "missing body" });
    return;
  }

  const { name, nacionality, age, profession } = req.body;

  const person = {
    name,
    nacionality,
    age,
    profession,
  };

  try {
    await Person.create(person);

    res.status(201).json({ person });
  } catch (error) {
    res.status(500).json({ error: error });
  }
  return;
});

router.get("/", async (req, res) => {
  try {
    const people = await Person.find();

    res.status(201).json({ people });
  } catch (error) {
    res.status(500).json({ error: error });
  }
  return;
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({ _id: id });
    if (!person) {
      res.status(404).json();
      return;
    }
    res.status(200).json({ person });
  } catch (error) {
    res.status(500).json({ error: error });
  }
  return;
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: "missing body" });
    return;
  }

  const { name, nacionality, age, profession } = req.body;
  const person = {
    name,
    nacionality,
    age,
    profession,
  };

  try {
    const updtatedPerson = await Person.updateOne({ _id: id }, person);
    if (updtatedPerson.matchedCount === 0) {
      res.status(404).json();
      return;
    }
    res.status(201).json({ person });
  } catch (error) {
    res.status(500).json({ error: error });
  }
  return;
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });
    if (!person) {
      res.status(404).json();
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
  

  try {
    await Person.deleteOne({ _id: id });

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error });
  }
  return;
});

module.exports = router;
