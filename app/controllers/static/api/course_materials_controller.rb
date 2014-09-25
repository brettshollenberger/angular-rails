module Static
  module Api
    class CourseMaterialsController < ApplicationController
      CourseMaterials = Struct.new(:id, :name, :filetype, :classification,
                                   :parent_id, :url)

      def index
        @course_materials = database.map { |c| CourseMaterials.new(*c) }
      end

      def show
        @course_material = CourseMaterials.new(*select(params[:id]))
      end

    private
      def database
        [
          [4, "The Satanic Verses", "txt", "reading", 1, "satan.com"],
          [5, "Quizzes", "directory", "directory", 1, "localhost:3000/static/api/course_materials/5"]
        ]
      end

      def select(id)
        database.select { |c| c[0].to_s == id }.first
      end
    end
  end
end
