# from fastapi import FastAPI, HTTPException, Query
# from fastapi.middleware.cors import CORSMiddleware
# from pymongo import MongoClient

# app = FastAPI()

# origins = [
#     "http://127.0.0.1:5501",  # Add your frontend domain here
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # MongoDB Atlas connection
# client = MongoClient("mongodb://localhost:27017")
# db = client["eyes4naija"]
# reports_collection = db["reports"]

# @app.post("/reports")
# async def create_report(
#     reportHeadline: str = Query(...),
#     reportText: str = Query(...),
#     state: str = Query(...),
#     crimeCategory: str = Query(...)
# ):
#     try:
#         reports_collection.insert_one({
#             "reportHeadline": reportHeadline,
#             "reportText": reportText,
#             "state": state,
#             "crimeCategory": crimeCategory
#         })
#         return {"message": "Report submitted successfully"}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail="Error submitting report: " + str(e))
