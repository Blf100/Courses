import { 
  Body,
  Controller,
  Delete,
  Get, 
  HttpCode, 
  HttpStatus, 
  Param, 
  Patch, 
  Post, 
  Res} 
  from '@nestjs/common';

import { Response, Request } from 'express';

@Controller("courses")
export class CoursesController {

  @Get()
  findAll(@Res() response: Response) {
    return response.status(204).send("Listagem de cursos") ;
  }

  @Get(":id")
  findOne(@Param("id") id: string ) {
    return `Curso número ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body("name") body: Request) {
    return body;  
  }

  @Patch(":id")
  update(@Param ("id") id: string, @Body () body: Request) {
    return `Atualização do curso ${id}`
  }

  @Delete()
  remove(@Param("id") id: string, @Res() response: Response) {
    return response.status(204).send()
  }

}
