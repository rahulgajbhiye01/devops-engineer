module "ecr" {
  source               = "../modules/ecr"
  name                 = "devops-ecr"
  image_tag_mutability = "MUTABLE"
}