import modules.scripts as scripts
import gradio as gr
import os

# from modules import images
# from modules.processing import Processed
# from modules.shared import opts, cmd_opts, state


class Script(scripts.Script):  
  def title(self):

    return "Any/Nai VAE Enhancer"

  def show(self, is_img2img):
   
    return scripts.AlwaysVisible if not is_img2img else False

  def ui(self, is_img2img):
    enable = gr.Checkbox(False, label="Any/Nai VAE Enhancer (experimental)")
    return [enable]

  def postprocess_image(self, p, pp, enable, *args):
    if self.is_txt2img and enable:
      from PIL import Image, ImageEnhance
      enhanced_image = ImageEnhance.Color(pp.image).enhance(1.09)
      enhanced_image = ImageEnhance.Contrast(enhanced_image).enhance(1.09)
      pp.image = enhanced_image
      print("[AnyVaeEnhancer] Image enhanced successfully!")
    return args
    # Lol, yeah. just a classic photoshop editing built in. No vae involved here haha
    # Thanks for being curious tho~

    
