import { Router } from "express";
import addPatient from "../controllers/patient/addPatient.controller.js";
import { getAllPatientsWithDietChart } from "../controllers/patient/gellAllPatient.controller.js";
import { deletePatient } from "../controllers/patient/deletePatient.controller.js";
import editPatient from "../controllers/patient/editPatient.controller.js";
import { updateDietChart } from "../controllers/patient/updateDietChart.controller.js";
import { getIndividualPatient } from "../controllers/patient/getIndividualPatient.controller.js";

const router = Router();

router.post("/add-patient", addPatient);
router.get("/get-all-patients", getAllPatientsWithDietChart);
router.get("/get-individual-patient/:patientId", getIndividualPatient);
router.patch("/update-patient/:patientId", editPatient);
router.patch("/update-dietChart/:patientId", updateDietChart);
router.delete("/delete-patient/:patientId", deletePatient);

export default router;
